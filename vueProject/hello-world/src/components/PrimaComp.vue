<template>
  <div class="redBackground">
    <h1>Prima</h1>
    <p>{{ text }}</p>
    <p></p>
    <div>
      {{ nickname }}
    </div>
    <div>5 + 18 = {{ 5 + 18 }}</div>
  </div>
</template>

<script>
export default {
  name: "PrimaComp",
  props: {
    nickname: String,
  },
  data() {
    return { text: "Prima" };
  },
};
</script>
<style>
.redBackground {
  background-color: red;
}
</style>
