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
  width: 200px;
  height: 140px;
  box-sizing: border-box;

  .button-cover {
    height: 80px;
    margin: 20px;
    background-color: #fff;
    box-shadow: 0 10px 20px -8px #c5d6d6;
    border-radius: 4px;

    &:before {
      position: absolute;
      right: 0;
      bottom: 0;
      color: #d7e3e3;
      font-size: 12px;
      line-height: 1;
      padding: 5px;
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
  width: 76px;
  height: 38px;
  margin: -20px auto 0 auto;
  overflow: hidden;
}

.button.r,
.button.r .layer {
  border-radius: 100px;
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
  content: " X";
  position: absolute;
  top: 4px;
  left: 4px;
  width: 24px;
  height: 12px;
  color: #fff;
  font-size: 12px;
  font-weight: 350;
  text-align: center;
  line-height: 117%;
  padding: 9px 4px;
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
