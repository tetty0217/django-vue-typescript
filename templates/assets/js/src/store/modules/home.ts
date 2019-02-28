import {Mutation, MutationAction, Action, VuexModule, getModule, Module} from 'vuex-module-decorators';
import store from '../../store/store';

export interface HomeState {
  msg: string;
}

// @ts-ignore
@Module({dynamic: true, store, name: 'home', namespaced: true})
class HomeModule extends VuexModule implements HomeState {

  public msg: string = '';
  public ellipsis: string = '...';

  @Mutation
  public SET_INPUT_TEXT(text: string): void {
    this.msg = text;
  }

  @Action({})
  public sendInputText(text: string): void {
    if (text.length > 20) {
      const subText = text.substr(0, 20) + this.ellipsis;
      this.SET_INPUT_TEXT(subText);
    } else {
      this.SET_INPUT_TEXT(text);
    }
  }

}

// @ts-ignore
export const homeModule = getModule(HomeModule);
