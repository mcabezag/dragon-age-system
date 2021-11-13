import { ageRollCheck } from "./dice.js";
import ConditionsWorkshop from "./conditions-workshop.js";

export class AgeRoller extends Application {
	constructor(options = {}) {
		super(options)
	}

	get template() {
		return `systems/age-system/templates/rolls/age-roller.hbs`;
	}
	
	getData(options) {
		const data = super.getData(options);
		data.colorset = game.settings.get("age-system", "colorScheme");
		data.isGM = game.user.isGM;
		return data;
	}
	
	activateListeners(html) {
		super.activateListeners(html);
		html.find("#age-roller img").click(this._onClick.bind(this));
		html.find("#age-roller img").contextmenu(this._onRightClick.bind(this));
		html.find("#age-roller-drag").contextmenu(this._onResetPosition.bind(this));
		html.find("#age-roller-drag").mousedown(this._onHideOptions.bind(this));
		html.find("#age-roller-container").mouseleave(this._onHideOptions.bind(this));
		html.find("#age-roller-container").mouseenter(this._onShowOptions.bind(this));
		html.find("#age-roller").hover(this._onShowOptions.bind(this));
		html.find(".conditions-workshop").click(this.openConditionWorkshop.bind(this));

		// Set position
		let roller = document.getElementById("age-roller");
		const rollerPos = game.user.getFlag("age-system", "ageRollerPos");
		roller.style.left = rollerPos.xPos;
		roller.style.bottom = rollerPos.yPos;
		
		// Make the DIV element draggable:
		this._dragElement(roller);
	}
	
	refresh() {
		this.render(true);
	}

	openConditionWorkshop(ev) {
		return new ConditionsWorkshop().render(true);
	}

	_onHideOptions(ev) {
		const opt = document.getElementById("age-roller-options");
		opt.style.display = 'none';
	}

	_onShowOptions(ev) {
		const opt = document.getElementById("age-roller-options");
		opt.style.display = 'inline-block';
	}

 	async _onClick(event) {
		event.preventDefault();
		const rollData = {
			event,
			flavor: game.user.name,
			flavor2: game.i18n.localize("age-system.chatCard.looseRoll")
		}
        ageRollCheck(rollData);
	}

	async _onRightClick(event) {
		event.preventDefault();
		let roll = await new Roll("1d6").evaluate({async: true});
		return roll.toMessage({}, {rollMode: event.shiftKey ? "blindroll" : ""});
	}

	_onResetPosition(event) {
		const elmnt = event.currentTarget.closest("#age-roller");
		const original = CONFIG.ageSystem.ageRollerPos;
		elmnt.style.left = original.xPos;
		elmnt.style.bottom = original.yPos;
		this._setOptionsMenuPos(elmnt);
		game.user.setFlag("age-system", "ageRollerPos", original);
	}

	_setOptionsMenuPos(ref) {
		let opts = document.getElementById("age-roller-options");
		opts.style.left = (ref.offsetLeft + 52) + "px";
		opts.style.bottom = (ref.offsetParent.clientHeight - ref.offsetTop - ref.clientHeight) + "px";
	}

	_dragElement(elmnt) {
		var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
		const ageRoller = this;
		if (document.getElementById("age-roller-drag")) {
			// if present, the header is where you move the DIV from:
			document.getElementById("age-roller-drag").onmousedown = dragMouseDown;
		} else {
			// otherwise, move the DIV from anywhere inside the DIV:
			elmnt.onmousedown = dragMouseDown;
		}

		// Set new position for Options Menu
		this._setOptionsMenuPos(elmnt)
	  
		function dragMouseDown(e) {
			e = e || window.event;
			e.preventDefault();
			// get the mouse cursor position at startup:
			pos3 = e.clientX;
			pos4 = e.clientY;
			document.onmouseup = closeDragElement;
			// call a function whenever the cursor moves:
			document.onmousemove = elementDrag;
		}
	  
		function elementDrag(e) {
			e = e || window.event;
			e.preventDefault();
			// calculate the new cursor position:
			pos1 = pos3 - e.clientX;
			pos2 = pos4 - e.clientY;
			pos3 = e.clientX;
			pos4 = e.clientY;
			// set the element's new position:
			elmnt.style.bottom = (elmnt.offsetParent.clientHeight - elmnt.offsetTop - elmnt.clientHeight + pos2) + "px";
			elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
		}
	  
		function closeDragElement() {
		  	// stop moving when mouse button is released:
		  	document.onmouseup = null;
		  	document.onmousemove = null;
		  	// Save position on appropriate User Flag
			const rollerPos = {};
			rollerPos.xPos = elmnt.style.left;
			rollerPos.yPos = elmnt.style.bottom;
			game.user.setFlag("age-system", "ageRollerPos", rollerPos);
			ageRoller._setOptionsMenuPos(elmnt)
		}
	}
}