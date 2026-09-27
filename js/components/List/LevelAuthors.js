export default {
    props: {
        author: {
            type: String,
            required: true,
        },
        creators: {
            type: Array,
            required: true,
        },
        verifier: {
            type: [String, Array],
            required: true,
        },
    },

    template: `
        <div class="level-authors">
            <template v-if="selfVerified">
                <div class="type-title-sm">Creator & Verifier</div>
                <p class="type-body">
                    <span>{{ author }}</span>
                </p>
            </template>

            <template v-else-if="creators.length === 0">
                <div class="type-title-sm">Creator</div>
                <p class="type-body">
                    <span>{{ author }}</span>
                </p>

                <div class="type-title-sm">Verifier</div>
                <p class="type-body">
                    <template
                        v-for="(v, index) in verifierList"
                        :key="\`verifier-\${v}\`"
                    >
                        <span>{{ v }}</span><span v-if="index < verifierList.length - 1">, </span>
                    </template>
                </p>
            </template>

            <template v-else>
                <div class="type-title-sm">Creators</div>
                <p class="type-body">
                    <template
                        v-for="(creator, index) in creators"
                        :key="\`creator-\${creator}\`"
                    >
                        <span>{{ creator }}</span><span v-if="index < creators.length - 1">, </span>
                    </template>
                </p>

                <div class="type-title-sm">Verifier</div>
                <p class="type-body">
                    <template
                        v-for="(v, index) in verifierList"
                        :key="\`verifier-\${v}\`"
                    >
                        <span>{{ v }}</span><span v-if="index < verifierList.length - 1">, </span>
                    </template>
                </p>
            </template>

            <div class="type-title-sm">Publisher</div>
            <p class="type-body">
                <span>{{ author }}</span>
            </p>
        </div>
    `,

    computed: {
        verifierList() {
            return Array.isArray(this.verifier)
                ? this.verifier
                : [this.verifier];
        },

        selfVerified() {
            return (
                this.creators.length === 0 &&
                this.verifierList.length === 1 &&
                this.author === this.verifierList[0]
            );
        },
    },
};
