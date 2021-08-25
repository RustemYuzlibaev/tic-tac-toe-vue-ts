<template>
  <main>
    <section class="board" :class="player" ref="board" :key="boardKey">
      <div
        class="cell"
        @click.once="fillCell"
        v-for="(cell, index) of cells"
        :key="index"
        :order="index"
      />
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { nextMoveEasy, nextMoveBest, Sign } from "../levels";
import { getWinner } from "../utils";

export default defineComponent({
  data() {
    return {
      boardKey: 0,
      gameEnded: false,
      cells: ["", "", "", "", "", "", "", "", ""] as Array<string>,
      // eslint-disable-next-line no-undef
      cellsNodes: [] as unknown as NodeListOf<HTMLElement>,
    };
  },
  props: { player: String, levelUp: Boolean },
  methods: {
    restartBoard(): void {
      this.cells.fill("");
      this.$emit("disableChoice", false);
      this.gameEnded = false;
      this.boardKey += 1;
    },

    setupBoardNodes(): void {
      const board = this.$refs.board as Node;
      // eslint-disable-next-line no-undef
      this.cellsNodes = board.childNodes as NodeListOf<HTMLElement>;
    },

    fillCell(e: Event): void {
      this.$emit("disableChoice", true);
      const cell = e.target as HTMLElement;
      const order = Number(cell.attributes.getNamedItem("order")?.value);
      const cellAvailable = this.cells[order] === "";

      if (this.player === "turn-x" && cellAvailable) {
        cell.classList.add("x");
        this.cells[order] = "x";
        this.checkForWin();
        !this.gameEnded && this.moveByComputer("o", this.levelUp);
        this.checkForWin();
      }

      if (this.player === "turn-o" && cellAvailable) {
        cell.classList.add("o");
        this.cells[order] = "o";
        this.checkForWin();
        !this.gameEnded && this.moveByComputer("x", this.levelUp);
        this.checkForWin();
      }
    },

    moveByComputer(sign: Sign, levelUp: boolean): void {
      const nextMove = levelUp
        ? nextMoveBest(sign, this.cells)
        : nextMoveEasy(sign, this.cells);

      if (typeof nextMove === "number") {
        this.cells.splice(nextMove, 1, sign);
        this.cellsNodes[nextMove + 1].classList.add(sign);
      }
    },

    checkForWin(): void {
      let lineToShow = "";
      let winLine = "You win! Restart the game?";
      let lostLine = "You lost the game. Restart?";
      let drawLine = "Game ended in a draw. Restart?";

      const { xWin, oWin, draw } = getWinner(this.cells);

      if (xWin && !this.gameEnded) {
        if (this.player === "turn-x") lineToShow = winLine;
        if (this.player === "turn-o") lineToShow = lostLine;
        this.gameEnded = true;
        this.showPopup(lineToShow);
      }

      if (oWin && !this.gameEnded) {
        if (this.player === "turn-o") lineToShow = winLine;
        if (this.player === "turn-x") lineToShow = lostLine;
        this.gameEnded = true;
        this.showPopup(lineToShow);
      }

      if (draw && !this.gameEnded) {
        lineToShow = drawLine;
        this.gameEnded = true;
        this.showPopup(lineToShow);
      }
    },

    showPopup(line: string): void {
      setTimeout(() => {
        const answer = confirm(line);
        answer && this.restartBoard();
      }, 0);
    },
  },
  mounted() {
    this.setupBoardNodes();
  },
  updated() {
    this.setupBoardNodes();
  },
});
</script>

<style scoped lang="scss">
main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 0%;
}

.board {
  display: grid;
  grid-template-columns: repeat(3, auto);
}

.cell {
  position: relative;
  border: 1px solid #000;
  width: 100px;
  padding-top: 100%;
  cursor: pointer;
}

.cell:nth-child(1),
.cell:nth-child(2),
.cell:nth-child(3) {
  border-top: none;
}

.cell:nth-child(3),
.cell:nth-child(6),
.cell:nth-child(9) {
  border-right: none;
}

.cell:nth-child(1),
.cell:nth-child(4),
.cell:nth-child(7) {
  border-left: none;
}

.cell:nth-child(7),
.cell:nth-child(8),
.cell:nth-child(9) {
  border-bottom: none;
}

.cell.x,
.cell.o {
  cursor: not-allowed;
}

.cell.x::after,
.cell.x::before,
.board.turn-x .cell:not(.x):not(.o):hover::after,
.board.turn-x .cell:not(.x):not(.o):hover::before {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 10px;
  height: 90px;
  background-color: var(--dark);
  border-radius: 99px;
}

.cell.x::before,
.board.turn-x .cell:not(.x):not(.o):hover::before {
  transform: translate(-50%, -50%) rotate(-45deg);
}

.cell.x::after,
.board.turn-x .cell:not(.x):not(.o):hover::after {
  transform: translate(-50%, -50%) rotate(45deg);
}

.cell.o::before,
.board.turn-o .cell:not(.x):not(.o):hover::before {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  border: 10px solid var(--dark);
  border-radius: 50%;
}

.board.turn-x .cell:not(.x):not(.o):hover::after,
.board.turn-x .cell:not(.x):not(.o):hover::before {
  background-color: var(--grey);
}

.board.turn-o .cell:not(.x):not(.o):hover::before {
  border-color: var(--grey);
}
</style>
