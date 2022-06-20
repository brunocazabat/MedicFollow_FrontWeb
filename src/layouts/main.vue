<script>
import { layoutComputed } from "@/state/helpers";

import Vertical from "./vertical";

export default {
    components: {
        Vertical
    },
    data() {
        return {};
    },
    computed: {
        ...layoutComputed,
    },

};
</script>

<template>
<div>
    <Vertical v-if="layoutType === 'vertical'" :layout="layoutType">
        <slot />
    </Vertical>
</div>
</template>
