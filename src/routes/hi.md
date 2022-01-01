<script lang="ts" context="module">
	export async function load({ fetch }) {
		const res = await fetch('/api/hi_url');

		if (res.ok) {
			return {
				props: {
					hiUrl: await res.json(),
				}
			};
		}

		return {
			status: res.status,
			error: new Error('Could not load hi url'),
		};
	}
</script>

<script lang="ts">
    export let hiUrl: string;
</script>


## From [The C Programming Language]({hiUrl}):

```C
main( ) {
        printf("hello, world\n");
}
```