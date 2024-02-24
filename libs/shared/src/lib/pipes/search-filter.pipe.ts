import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iconFilter'
})
export class IconSearchPipe implements PipeTransform {

  transform(itens: any[], textoBusca: string): any[] {

    if (!textoBusca) { return itens; }

    textoBusca = textoBusca.toLowerCase();

    return itens.filter(
      item => {
        let include = false;
        item.tags.forEach(tag => {
          if (tag.includes(textoBusca)) {
            include = true;
          }
        })
        return include;
      }
    );
  }

}
