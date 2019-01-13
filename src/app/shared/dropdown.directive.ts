import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    // @HostBinding('class') dropdownClass = '';

    // isOpen: boolean = false;

    // @HostListener('click') toggleOpen(eventData: Event) {
    //     this.isOpen = !this.isOpen;
    //     if (this.isOpen) {
    //         this.dropdownClass = 'open';
    //     } else {
    //         this.dropdownClass = '';
    //     }
        
    // }

    @HostBinding('class.open') isOpen = false;

    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
}