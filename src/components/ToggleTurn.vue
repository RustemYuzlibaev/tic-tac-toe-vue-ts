<template>
  <div class="toggle-button-cover">
    <div class="button-cover">
      <div class="button r">
        <input
          type="checkbox"
          class="checkbox"
          @change="$emit('toggleChange', $event.target.checked)"
          :disabled="disabled"
        />
        <div class="knobs" :class="levels"></div>
        <div class="layer"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: { disabled: Boolean, levels: String },
});
</script>

<style scoped lang="scss">
.toggle-button-cover {
  position: relative;
  width: 21rem;
  height: 14rem;
  box-sizing: border-box;

  .button-cover {
    height: 10rem;
    margin: 2rem;
    background-color: #fff;
    box-shadow: 0 1rem 2rem -0.9rem #c5d6d6;
    border-radius: 0.4rem;

    &:before {
      position: absolute;
      right: 0;
      bottom: 0;
      color: #d7e3e3;
      font-size: 1.2rem;
      line-height: 1;
      padding: 0.5rem;
    }
  }
}

.button-cover,
.knobs,
.layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.button {
  position: relative;
  top: 50%;
  width: 8rem;
  height: 3.8rem;
  margin: -2rem auto 0 auto;
  overflow: hidden;
}

.button.r,
.button.r .layer {
  border-radius: 10rem;
}

.button.b2 {
  border-radius: 2px;
}

.checkbox {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 3;

  &:disabled {
    cursor: not-allowed;
  }
}

.knobs {
  z-index: 2;
}

.layer {
  width: 100%;
  background-color: #ebf7fc;
  transition: 0.3s ease all;
  z-index: 1;
}

.button {
  overflow: visible;
}

.button .knobs::before {
  content: "X";
  position: absolute;
  top: 0.4rem;
  left: 0.4rem;
  width: 2.4rem;
  height: 1.2rem;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 350;
  text-align: center;
  line-height: 117%;
  padding: 0.9rem 0.4rem;
  background-color: var(--primary);
  border-radius: 50%;
}

.button .levels::before {
  content: "easy";
  line-height: 115%;
}

.button .layer,
.button .knobs,
.button .knobs::before {
  transform: rotateZ(0);
  transition: 0.4s cubic-bezier(0.18, 0.89, 0.35, 1.15) all;
}

.button .checkbox:checked + .knobs {
  transform: rotateZ(-180deg);
}

.button .checkbox:checked + .knobs::before {
  content: "O";
  background-color: var(--secondary);
  transform: rotateZ(180deg);
}

.button .checkbox:checked + .levels::before {
  content: "hard";
}

.button .checkbox:checked ~ .layer {
  background-color: #fcebeb;
  transform: rotateZ(180deg);
}
</style>
