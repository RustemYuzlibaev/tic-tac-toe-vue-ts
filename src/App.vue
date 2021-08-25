<template>
  <header class="header">
    <h1 class="headline">Tic Tac Toe</h1>
    <div class="toggles">
      <toggle-turn @toggleChange="changePlayer" :disabled="disabled" />
      <toggle-turn
        @toggleChange="changeDifficulty"
        levels="levels"
        :disabled="disabled"
      />
    </div>
  </header>
  <board
    class="playground"
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
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid var(--primary);
  flex-basis: 40%;

  .headline {
    margin: 0 1.5rem 0 1.5rem;
    font-size: 5rem;
    color: #fff;
    text-transform: uppercase;
    text-shadow: -4px 1px var(--primary);
  }
}

.playground {
  flex-basis: 60%;
}
</style>
