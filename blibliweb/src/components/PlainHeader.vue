<template>
  <header class="header">
    <nav class="no-padding">
      <div class="row col-12 no-padding no-margin pt-2 pb-2 bg-bl">
        <div class="col-9 no-padding mt-mb-auto">
          <div class="ml-2">
            <font-awesome-icon v-on:click="back" icon="chevron-left" />
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script type="text/javascript">

export default {
  methods: {
    back() {
      window.history.back();
    },
  },
};
</script>

<style scoped lang="scss">
@import "../style/font/font.scss";

$break-small: 720px;
$break-large: 730px;

header {
  z-index: 1000;
}

nav {
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;

  @media screen and (max-width: $break-small) {
  }

  // @media screen and (min-width: $break-large) {
  //   float: right;
  // }
}

a {
  color: white !important;
  text-decoration: none !important;
}

.bg-bl {
  background-color: #0095da;
  height: 50px;
}

.blilogo {
  width: 100px;
  height: auto;
}

.bg-blue {
  @media screen and (max-width: $break-small) {
    background-color: #0095da;
  }
  height: 90px;
}

.no-padding {
  padding: 0px !important;
}

.no-margin {
  margin: 0px !important;
}

.fixed {
  position: fixed;
}

.mt-mb-auto {
  margin-top: auto;
  margin-bottom: auto;
}

.sticky- {
  position: sticky;
  top: 0;
  z-index: 100;
}

.barcodelogo {
  width: 35px;
}

.scan-text {
  font-size: 11px;
  color: #808080;
  margin-bottom: 0px;
}

.shadow-box {
  box-shadow: 0 0 8px 2px rgba(0, 0, 0, 0.3);
}
</style>
