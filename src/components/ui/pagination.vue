<template>
    <div class="pagination">
        <span class="pagination__iterator">
            1 of 2
        </span>
        <div class="pagination__arrows">
            <button>◀</button>
            <button>▶</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['list', 'size', 'lastItem'],
    computed: {
        pageCount: () => {
            if (this?.list) {
                return Math.ceil(this.list / this.size);
            }

            return false;
        }
    },
    mounted () {
    }
};
</script>

<style src="@scss/components/ui/pagination" lang="scss" scoped></style>
