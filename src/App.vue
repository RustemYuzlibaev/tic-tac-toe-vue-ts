<template>
  <header class="header">
    <h1 class="headline">Tic Tac Toe</h1>
    <toggle-turn @toggleChange="changePlayer" :disabled="disabled" />
    <toggle-turn
      @toggleChange="changeDifficulty"
      levels="levels"
      :disabled="disabled"
    />
  </header>
  <board
    @disableChoice="disableSwitching"
    :player="player"
    :levelUp="difficultyHard"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Board from "./components/Board.vue";
import ToggleTurn from "./components/ToggleTurn.vue";

export default defineComponent({
  name: "App",
  components: {
    Board,
    ToggleTurn,
  },
  data() {
    return {
      player: "turn-x",
      disabled: false,
      difficultyHard: false,
    };
  },
  methods: {
    changePlayer(checked: boolean) {
      this.player = checked ? "turn-o" : "turn-x";
    },
    changeDifficulty(checked: boolean) {
      this.difficultyHard = checked;
    },
    disableSwitching(value: boolean) {
      this.disabled = value;
    },
  },
});
</script>

<style lang="scss">
.header {
  background-color: var(--dark);
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid var(--primary);

  .headline {
    margin: 0 40px 0 40px;
    color: #fff;
    font-size: 42px;
    text-transform: uppercase;
    text-shadow: -4px 1px var(--primary);
  }
}
</style>
