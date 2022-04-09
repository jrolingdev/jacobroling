<script lang="ts">
	import { init, send } from '@emailjs/browser';
	import { object, string } from 'yup';
	import Input from '$lib/components/Input.svelte';
	import { trycatch } from '$lib/utils/index';
	import Icon from '@iconify/svelte';

	init('user_jIRvLaZg743dF5V7ne1qa');

	enum STATE {
		ACTIVE,
		IDLE,
		COMPLETE
	}

	let form;

	let state = STATE.IDLE;

	let inputs = {
		email: {},
		phone: {},
		message: {}
	};

	const schema = object({
		email: string().email().required(),
		phone: string().required(),
		message: string().required()
	});

	async function submitForm() {
		state = STATE.ACTIVE;

		const data = Object.fromEntries(
			Array.from(form.querySelectorAll('input,textarea')).map((input: any) => {
				const { name, value } = input;
				return [name, value];
			})
		);

		Object.keys(inputs).forEach((key) => {
			inputs[key].clear();
		});

		const [validation, validationError] = await trycatch(schema.validate(data));

		if (validationError) {
			inputs[validationError.params.path].warn(validationError.message);
			state = STATE.IDLE;
			return;
		}

		Object.keys(inputs).forEach((key) => {
			inputs[key].validate();
		});

		const [sent, sentError] = await trycatch(send('service_jnbz0oda', 'template_lwdm9nn', data));

		if (sentError) {
			state = STATE.IDLE;
			return;
		}

		state = STATE.COMPLETE;
	}
</script>

<svelte:head>
	<title>Contact - Jacob Roling</title>
</svelte:head>

<section class="my-16 mx-6 md:mx-auto max-w-screen-md">
	<form bind:this={form} on:submit|preventDefault={submitForm}>
		<div class="grid md:grid-cols-2 md:gap-4">
			<Input bind:this={inputs.email} label="Email" name="email" type="text" />
			<Input bind:this={inputs.phone} label="Phone" name="phone" type="text " />
		</div>
		<Input bind:this={inputs.message} label="Message" name="message" textarea type="text" />
		<button
			class="text-lg font-medium flex gap-4 items-center bg-primary px-4 py-2 rounded-full shadow"
			class:pointer-events-none={state === STATE.COMPLETE || state === STATE.ACTIVE}
			type="submit"
			disabled={state === STATE.COMPLETE || state === STATE.ACTIVE}
			class:bg-success={state === STATE.COMPLETE}
			class:text-success={state === STATE.COMPLETE}
		>
			<div>
				{state === STATE.IDLE ? 'Send' : state === STATE.ACTIVE ? 'Sending' : 'Sent'}
			</div>
			<Icon
				icon={state === STATE.IDLE
					? 'carbon:send-filled'
					: state === STATE.ACTIVE
					? 'eos-icons:loading'
					: 'ant-design:check-outlined'}
				width="24"
			/>
		</button>
	</form>
</section>
