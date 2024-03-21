<script lang="ts">
	import { browser } from '$app/environment';
	import Header from '$lib/components/Header.svelte';

	import { resolvedTheme } from '$lib/theme';
	import '@fontsource/inter';
	import '@fontsource/jetbrains-mono';
	import '../../../app.postcss';
	// import type { LayoutServerData } from './$types';
	import { onDestroy } from 'svelte';

	onDestroy(
		resolvedTheme.subscribe((value) => {
			if (!browser) return;
			document.documentElement.classList.remove('light', 'dark');
			document.documentElement.classList.add(value);
		})
	);

  import * as Sheet from "$lib/components/ui/sheet/index.js";
  import { Button } from "$lib/components/ui/button/index.js";
  import { buttonVariants } from '$lib/components/ui/button';

  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
  import Badge from '$lib/components/ui/badge/badge.svelte';
  import { Skeleton } from "$lib/components/ui/skeleton/index.js";

  
  import IconArrowRight from '$lib/components/ui/icons/IconArrowRight.svelte';
  import IconEnterKey from '$lib/components/ui/icons/IconEnterKey.svelte';
  import IconDiscord from '$lib/components/ui/icons/IconDiscord.svelte';
	import IconLetter from '$lib/components/ui/icons/IconLetter.svelte';

  import { Textarea } from "$lib/components/ui/textarea/index.js";
	import { Switch } from '$lib/components/ui/switch';
	import { Separator } from '$lib/components/ui/separator';
  import * as Tabs from "$lib/components/ui/tabs";

  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import * as Card from "$lib/components/ui/card/index.js";

  let isFocused = false;
  
  import { onMount } from 'svelte';
  import { Jumper } from 'svelte-loading-spinners';
	import { Toaster, toast } from 'svelte-sonner';
	import IconArrowDown from '$lib/components/ui/icons/IconArrowDown.svelte';
	import IconArrowElbow from '$lib/components/ui/icons/IconArrowElbow.svelte';
	import IconCheck from '$lib/components/ui/icons/IconCheck.svelte';
	import IconEnlarge from '$lib/components/ui/icons/IconEnlarge.svelte';
	import IconGitHub from '$lib/components/ui/icons/IconGitHub.svelte';
	import IconClose from '$lib/components/ui/icons/IconClose.svelte';

  let isLoading = false;
  let isNewWorkflow = true;

  let messages = [];

  import { writable } from 'svelte/store';

  // Create a writable store to hold the data-text value
  const dataText = writable('');

  import { crossfade } from 'svelte/transition';
  import { tick } from 'svelte';
	import IconOpenAi from '$lib/components/ui/icons/IconOpenAI.svelte';

  const [send, receive] = crossfade(isNewWorkflow);

  async function sendUserPrompt(event: Event, clearText: boolean=true) {
    if ((event.key === 'Enter' || event.type === 'click') && !isLoading) {
      event.preventDefault();

      const text = event.target.textContent.trim(); // Trim whitespace

      if (text === '') {
        return; // Exit if text is empty
      }

      isLoading = true;
      isNewWorkflow = false;

      if (clearText) {
        event.target.textContent = '';
      }

      // Add the user's message to the list of messages
      // will be removed when API is connected

      // id should be set as message_id from API
      messages = [...messages, { id: text, question: text, answer: 'Response', sources: 'User', selectedTab: 'synth'}]

      const waitfor10seconds = new Promise((resolve) => setTimeout(resolve,5000));
      toast.promise(waitfor10seconds, {
        loading: 'Scouring the globe for breaking news...',
        success: 'Here we are!',
        error: 'Error'
      })

      // Scroll to the last message
      tick().then(() => {
        // const lastMessage = document.querySelector('#chat-box-main-container #chat-anchor-scroll');
        const lastMessage = document.querySelector('#chat-box-main-container > :last-child');
        lastMessage.scrollIntoView({ behavior: 'smooth', block: 'start'});
      });


      await waitfor10seconds;


    // ---------------------- //

    // Send a POST request with the div's text content as the payload
    //  const promise = fetch('/your-endpoint', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ text }),
    //   });

    //   toast.promise(promise, {
    //     loading: 'Loading...',
    //     success: (data) => `Success: ${data.name} has been added!`,
    //     error: 'Error'
    //   });

      // Handle the response here
      // const response = await promise;
      // const data = await response.json();

      // ---------------------- //

      isLoading = false;
    }
  }

</script>

<svelte:head>
	<title>the-needl</title>
</svelte:head>


    <Header/>

  <!-- MAIN SECTION -->

  <div id="context-container" class="flex flex-col grow justify-center max-w-xl mx-3 bg-red-400">
	<div class="bg-green-400">ciao</div>
  </div>
  <!-- input box section -->
  <!-- <div id="user-input-box" class="flex z-50 justify-center w-full pb-4 px-3 bg-white"> -->
  <div id="user-input-box" class="sticky z-10 flex justify-center w-full bottom-0 pb-4 px-3 bg-white/50">  
    <!-- border only triggered on parent box to allow fully customizable text box (i.e. add icon) -->

    <div class="flex flex-col w-full max-w-xl">
      <div class="flex flex-row border transition-colors duration-200 ease-in-out outline-none {isFocused ? 'border-slate-700' : 'border-slate-300'} rounded-lg">
        <div 
          id="user-prompt-container"
          class="ml-2 overflow-hidden max-w-xl w-full py-3 px-3 outline-none" 
          data-gramm="false"
          contenteditable="plaintext-only"
          data-text="Ask question | @ for context"
          aria-owns="quill-mention-list"
          role="textbox"
          tabindex="0"
          on:focus={() => isFocused = true}
          on:blur={() => isFocused = false}
          on:keydown={sendUserPrompt}
          >
        </div>
        
        <button class="mr-3 flex items-center" on:click={sendUserPrompt}>
            <IconEnterKey />
        </button>
        
      </div>
      
    </div>
    
  </div>

<!-- </main> -->

