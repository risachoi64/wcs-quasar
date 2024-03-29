<template>
  <div class="window">
    <div class="head">
      <div class="buttons">
        <div class="button -red"></div>
        <div class="button -yellow"></div>
        <div class="button -green"></div>
      </div>
      <div class="tabs-group">
        <draggable :list="$data.tabs" v-bind="dragOptions" :style="tabsWidth">
          <transition-group class="tabs" name="list-complete">
            <template v-for="tab in $data.tabs" :key="tab.id">
              <div
                :class="[active(tab.id), 'tab']"
                @mousedown="changeTab(tab.id)"
              >
                <p class="text">{{ tab.name }}</p>
                <div
                  class="close-button"
                  @mousedown="beforeCloseTab($event)"
                  @click="closeTab(tab.id)"
                ></div>
              </div>
            </template>
          </transition-group>
        </draggable>
        <div key="add-button" class="add-button" @click="addTab"></div>
      </div>
    </div>
    <div class="menu">
      <div class="buttons">
        <div class="arrows">
          <div class="arrow -back"></div>
          <div class="arrow -forward"></div>
        </div>
      </div>
      <input class="search" type="text" />
    </div>
    <div class="content">
      <template v-for="tab in $data.tabs" :key="tab.id">
        <div :class="[active(tab.id), 'tab-content']">
          <img
            class="image"
            :src="'https://picsum.photos/800/800?random=' + tab.id"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script>
// import draggable from "@/vuedraggable";
export default {
  data() {
    return {
      currentTabId: 1,
      nextTabId: 4,
      tabs: [
        {
          id: 1,
          name: "Hello CodePen",
        },
        {
          id: 2,
          name: "Hi CodePen",
        },
        {
          id: 3,
          name: "Hey CodePen",
        },
      ],
    };
  },
  computed: {
    active() {
      return (id) => id === this.$data.currentTabId && "-active";
    },
    dragOptions() {
      return {
        animation: 250,
        disabled: false,
        ghostClass: "-dragging",
      };
    },
    tabsWidth() {
      return {
        maxWidth: this.$data.tabs.length * 190 + "px",
        width: "100%",
        minWidth: "0px",
        transition: "max-width 0.2s",
      };
    },
  },
  methods: {
    changeTab(id) {
      this.$data.currentTabId = id;
    },
    beforeCloseTab(e) {
      e.stopPropagation();
    },
    addTab() {
      this.$data.tabs.push({
        id: this.$data.nextTabId,
        name: "new tab",
      });
      this.$data.currentTabId = this.$data.nextTabId;
      this.$data.nextTabId++;
    },
    closeTab(id) {
      this.$data.tabs.forEach((tab, index) => {
        tab.id === id &&
          this.$data.tabs.splice(index, 1) &&
          this.$data.currentTabId === id &&
          (this.$data.currentTabId = this.$data.tabs[index]
            ? this.$data.tabs[index].id
            : this.$data.tabs[index - 1].id);
      });
    },
  },
};
</script>

<style lang="scss">
$white: #fff;
$gray-dark: #dee1e6;
$gray-light: #e7eaef;

body {
  padding: 20px;
  font-family: "Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN",
    "Hiragino Sans", Meiryo, sans-serif;
  display: flex;
  align-items: center;
  height: 100vh;
  box-sizing: border-box;
  background: linear-gradient(
    135deg,
    rgb(250, 250, 255) 0%,
    rgb(240, 240, 246) 50%,
    rgb(230, 230, 237) 100%
  );
}

.window {
  width: 100%;
  max-width: 800px;
  max-height: 500px;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 4px 8px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  margin: 20px auto;

  > .content {
    min-height: 0;
    height: 100%;
  }
}

.head {
  background-color: $gray-dark;
  display: flex;
  overflow: hidden;

  .buttons {
    display: flex;
    align-items: center;
    padding: 0 4px 0 12px;

    > .button {
      width: 12px;
      height: 12px;
      border-radius: 100%;

      &:not(:last-child) {
        margin-right: 6px;
      }

      &.-red {
        background-color: #fb5a59;
      }

      &.-yellow {
        background-color: #ffc139;
      }

      &.-green {
        background-color: #60d045;
      }
    }
  }
}

.menu {
  min-height: 36px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid $gray-dark;

  > .buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 14px;

    > .arrows {
      display: flex;
      justify-content: space-between;
      width: 44px;

      > .arrow {
        width: 14px;
        height: 2px;
        background-color: #ccc;
        border-radius: 100px;
        position: relative;

        &::before,
        &::after {
          content: "";
          display: block;
          background-color: #ccc;
          position: absolute;
          width: 71%;
          height: 100%;
          border-radius: 100px;
          transform-origin: center left;
        }

        &::before {
          transform: rotate(45deg);
        }

        &::after {
          transform: rotate(-45deg);
        }

        &.-forward {
          transform: rotate(180deg);
        }
      }
    }
  }

  > .search {
    box-sizing: border-box;
    border-radius: 100px;
    border: 0;
    background-color: #f1f1f1;
    height: 26px;
    outline: 0;
    flex: 1;
    margin-right: 20px;
    padding: 0 12px;
    font-size: 12px;
    border: 2px solid transparent;

    &:focus {
      border: 2px solid #6dbce7;
    }
  }
}

.tabs-group {
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 8px;
  min-width: 0px;

  > .add-button {
    width: 14px;
    height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    padding: 8px;
    margin: 0 4px 2px;
    border-radius: 100%;
    transition: background-color 0.5s;

    &:hover {
      background-color: #ccc;
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      display: block;
      width: 2px;
      height: 14px;
      background-color: #666;
    }

    &::before {
      transform: rotate(90deg);
    }
  }
}

.tabs {
  display: inline-flex;
  align-items: flex-end;
  box-sizing: border-box;
  padding: 0 8px;
  line-height: 1;
  position: relative;
  z-index: 1;
  user-select: none;
  width: 100%;
}

.tab {
  position: relative;
  background-color: transparent;
  padding: 14px 12px;
  border-radius: 10px 10px 0 0;
  font-size: 12px;
  display: block;
  max-width: 160px;
  transition: background-color 0.2s;
  cursor: default;
  position: relative;
  margin-right: -1px;
  white-space: nowrap;
  flex: 1;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: $gray-light;

    &::before {
      background-color: $gray-light;
      right: 0;
    }
  }

  &.-active {
    background-color: $white;

    &::before {
      background-color: $white;
      right: 0;
    }
  }

  &.-dragging {
    opacity: 0;
  }

  &::after {
    content: "";
    display: block;
    height: 20px;
    width: 1px;
    background-color: #888;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    z-index: -1;
  }

  &::before {
    content: "";
    display: block;
    height: 20px;
    width: 30px;
    position: absolute;
    right: 1px;
    background-color: $gray-dark;
    transition: background-color 0.2s;
  }

  > .close-button {
    width: 10px;
    height: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(45deg);
    border-radius: 100%;
    padding: 4px;
    position: absolute;
    right: 8px;

    &:hover {
      background-color: #ddd;
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      display: block;
      width: 2px;
      height: 12px;
      background-color: #666;
    }

    &::before {
      transform: rotate(90deg);
    }
  }
}

.tab-content {
  display: none;
  padding: 20px;
  height: 100%;
  box-sizing: border-box;

  &.-active {
    display: block;
  }

  > .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
