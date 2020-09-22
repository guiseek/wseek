import { SeekSidebarComponent } from './sidebar.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SeekSidebarService {
  // @internal
  private _registry: { [key: string]: SeekSidebarComponent } = {};

  /**
   * Adiciona sidebar ao registrador
   *
   * @param key
   * @param sidebar
   */
  register(key, sidebar): void {
    // Verifica se já está sendo usado
    if (this._registry[key]) {
      console.error(
        `The sidebar with the key '${key}' already exists. Either unregister it first or use a unique key.`
      );

      return;
    }

    // Registra sidebar
    this._registry[key] = sidebar;
  }

  /**
   * Remove sidebar ao registrador
   *
   * @param key
   */
  unregister(key): void {
    // Verifica se existe no registro
    if (!this._registry[key]) {
      console.warn(
        `The sidebar with the key '${key}' doesn't exist in the registry.`
      );
    }

    // Unregister the sidebar
    delete this._registry[key];
  }

  /**
   * Retorna sidebar do registrada
   *
   * @param key
   * @returns {SeekSidebarComponent}
   */
  getSidebar(key): SeekSidebarComponent {
    // Verifica se existe no registro
    if (!this._registry[key]) {
      console.warn(
        `The sidebar with the key '${key}' doesn't exist in the registry.`
      );

      return;
    }

    // Retorna sidebar
    return this._registry[key];
  }
}
