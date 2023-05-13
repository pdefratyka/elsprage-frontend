import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appUmlautKey]'
})
export class UmlautKeyDirective {
  private pressedKeys = new Set<string>();

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (event.code === 'AltLeft' || event.code === 'KeyO'
      || event.code === 'KeyA' || event.code === 'KeyU' || event.code === 'KeyS') {
      this.pressedKeys.add(event.code);
      if (this.pressedKeys.has('AltLeft') && this.pressedKeys.has('KeyO')) {
        this.addUmlaut('ö');
      }
      if (this.pressedKeys.has('AltLeft') && this.pressedKeys.has('KeyA')) {
        this.addUmlaut('ä');
      }
      if (this.pressedKeys.has('AltLeft') && this.pressedKeys.has('KeyU')) {
        this.addUmlaut('ü');
      }
      if (this.pressedKeys.has('AltLeft') && this.pressedKeys.has('KeyS')) {
        this.addUmlaut('ß');
      }
    }
  }

  private addUmlaut(umlat: string): void {
    event.preventDefault();
    const input = event.target as HTMLInputElement;
    input.value = input.value.slice(0, input.selectionStart) + umlat + input.value.slice(input.selectionEnd);
    input.dispatchEvent(new Event('input', { bubbles: true }));
    this.pressedKeys.clear();
  }

  @HostListener('keyup', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    this.pressedKeys.delete(event.code);
  }
}
