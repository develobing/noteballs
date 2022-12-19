<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop px-2">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">Noteballs</div>

        <a
          ref="navbarBurgerRef"
          role="button"
          class="navbar-burger"
          :class="{ 'is-active': isShowMobileNav }"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          @click.prevent="isShowMobileNav ? hideMobileNav() : showMobileNav()"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        ref="navbarMenuRef"
        id="navbarBasicExample"
        class="navbar-menu"
        :class="{ 'is-active': isShowMobileNav }"
      >
        <div class="navbar-start"></div>

        <div class="navbar-end">
          <RouterLink
            to="/"
            class="navbar-item"
            active-class="is-active"
            @click="hideMobileNav"
          >
            Notes
          </RouterLink>

          <RouterLink
            to="/stats"
            class="navbar-item"
            active-class="is-active"
            @click="hideMobileNav"
          >
            Stats
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

/* Mobile Nav */
const isShowMobileNav = ref(false);

const showMobileNav = () => {
  isShowMobileNav.value = true;
};

const hideMobileNav = () => {
  isShowMobileNav.value = false;
};

/* Click outside to close */
const navbarMenuRef = ref(null);
const navbarBurgerRef = ref(null);

onClickOutside(
  navbarMenuRef,
  (event) => {
    hideMobileNav();
  },
  { ignore: [navbarBurgerRef] }
);
</script>

<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
