<template>
    <div class="home__block">
        <input type="text" class="home__input" placeholder="enter message"
               @input="inputText" v-model="current" maxlength="20">
        <div class="home__content">input home state: <span class="home__state">{{homeState}}</span></div>
    </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import {homeModule} from '../store/modules/home';

  @Component
  export default class HelloWorld extends Vue {

    private current: string = '';


    public inputText(): void {
      homeModule.sendInputText(this.current);
    }

    get homeState(): string {
      return homeModule.msg;
    }
  }
</script>
