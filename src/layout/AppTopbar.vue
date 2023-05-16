<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useLayout } from '@/layout/composables/layout';

const {  onMenuToggle } = useLayout();

const outsideClickListener = ref();
const topbarMenuActive = ref(false);

onMounted(() => {
    bindOutsideClickListener();
});

onBeforeUnmount(() => {
    unbindOutsideClickListener();
});


const onTopBarMenuButton = () => {
    topbarMenuActive.value = !topbarMenuActive.value;
};
/* const onSettingsClick = () => {
    topbarMenuActive.value = false;
    router.push('/documentation');
}; */
const topbarMenuClasses = computed(() => {
    return {
        'layout-topbar-menu-mobile-active': topbarMenuActive.value
    };
});

/**
 * 控制侧边栏菜单的显示和隐藏
 */
const bindOutsideClickListener = () => {
    if (!outsideClickListener.value) {
        outsideClickListener.value = (event: any) => {
            if (isOutsideClicked(event)) {
                topbarMenuActive.value = false;
            }
        };
        document.addEventListener('click', outsideClickListener.value);
    }
};
const unbindOutsideClickListener = () => {
    if (outsideClickListener.value) {
        document.removeEventListener('click', outsideClickListener.value);
        outsideClickListener.value = null;
    }
};
const isOutsideClicked = (event: { target: Node | null; }) => {
    if (!topbarMenuActive.value) return;

    const sidebarEl: Element | null = document.querySelector('.layout-topbar-menu');
    const topbarEl: Element | null = document.querySelector('.layout-topbar-menu-button');

    return !(sidebarEl?.isSameNode(event.target) || sidebarEl?.contains(event.target) || topbarEl?.isSameNode(event.target) || topbarEl?.contains(event.target));
};
</script>

<template>
    <div class="layout-topbar">
        <div class="layout-topbar-logo">
            <span>SAKAI</span>
        </div>

        <button class="p-link layout-menu-button layout-topbar-button" @click="onMenuToggle()">
            <i class="pi pi-bars"></i>
        </button>

        <div class="layout-topbar-menu" :class="topbarMenuClasses">
            <button @click="onTopBarMenuButton()" class="p-link layout-topbar-button">
                <i class="pi pi-comments"></i>
                <span>Comments</span>
            </button>
            <!-- <button @click="onSettingsClick()" class="p-link layout-topbar-button"> -->
            <button @click="onTopBarMenuButton()" class="p-link layout-topbar-button">
                <i class="pi pi-cog"></i>
                <span>Settings</span>
            </button>
            <button @click="onTopBarMenuButton()" class="p-link layout-topbar-button">
                <i class="pi pi-user"></i>
                <span>Profile</span>
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
