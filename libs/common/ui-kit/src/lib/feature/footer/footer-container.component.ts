import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  EmbeddedViewRef,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'seek-footer-container',
  template: `
    <ng-template #footerContent>
      <ng-content></ng-content>
    </ng-template>
  `,
})
export class SeekFooterContainerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('footerContent') portalActionsTmplRef;

  private disposeFn: () => void;

  private viewRef: EmbeddedViewRef<{}>;

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngAfterViewInit(): void {
    // renderiza a view
    this.viewRef = this.viewContainerRef.createEmbeddedView(
      this.portalActionsTmplRef
    );
    this.viewRef.detectChanges();

    // seleciona o elemento
    const outletElement = document.querySelector('#footer-container');

    // anexa o elemento selecionado na view
    this.viewRef.rootNodes.forEach((rootNode) =>
      outletElement.appendChild(rootNode)
    );

    // registre a função para que podemos usar
    // para remover o conteúdo do DOM novamente
    this.disposeFn = () => {};
  }

  ngOnDestroy(): void {
    const index = this.viewContainerRef.indexOf(this.viewRef);
    if (index !== -1) {
      this.viewContainerRef.remove(index);
    }
  }
}
