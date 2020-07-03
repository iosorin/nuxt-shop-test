<template>
    <div class="pagination">
        <span class="pagination__iterator">
            {{ currentPage }} of {{ totalPages }}
        </span>
        <div class="pagination__arrows">
            <button :disabled="currentPage <= 1" @click="$emit('change', currentPage - 1)">
                ◀
            </button>
            <button :disabled="currentPage >= totalPages" @click="$emit('change', currentPage + 1)">
                ▶
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        currentPage: {
            default: 1,
            type: Number
        },
        totalPages: {
            default: 2,
            type: Number
        }
    }
};
</script>

<style src="@scss/components/ui/pagination" lang="scss" scoped></style>
