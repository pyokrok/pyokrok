var PYOKROK = PYOKROK || {};

PYOKROK.MENU = {
	init: function(){
		this.setPrameters();
		this.bindEvent();
	},
	setPrameters: function(){
		this.$menuBtn = $('.hamburger-menu-btn-wrap');

	},
	bindEvent: function(){
		this.$menuBtn.on('click',$.proxy(this.openMenu,this))
	},
	openMenu: function(){
		if(this.$menuBtn.hasClass('isOpen')){
				this.closeMenu();
				return;
		}
		this.$menuBtn.addClass('isOpen');
	},
	closeMenu: function(){
		this.$menuBtn.removeClass('isOpen');
	}
}
$(function(){
	PYOKROK.MENU.init();
});
