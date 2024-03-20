<script lang="ts">
	import { browser } from '$app/environment';
	import Header from '$lib/components/Header.svelte';

	import { resolvedTheme } from '$lib/theme';
	import '@fontsource/inter';
	import '@fontsource/jetbrains-mono';
	import '../../app.postcss';
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

      messages = [...messages, { response: text, sources: 'User', selectedTab: 'synth'}]

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


<!-- <main class="relative h-screen"> -->

  <!-- <div class="absolute inset-0 flex items-center justify-start">
 <Sheet.Root>
   <Sheet.Trigger asChild let:builder>
     <Button builders={[builder]} variant="outline" size="ixs">
      <IconArrowRight />
    </Button>
  </Sheet.Trigger>
  <Sheet.Content side="left">
    <Sheet.Header>
      <Sheet.Title>Edit profile</Sheet.Title>
      <Sheet.Description>
        Make changes to your profile here. Click save when you're done.
      </Sheet.Description>
    </Sheet.Header>
    
    <div class="grid gap-4 py-4">
      <div class="grid grid-cols-4 items-center gap-4">
        <Label for="name" class="text-right">Name</Label>
        <Input id="name" value="Pedro Duarte" class="col-span-3" />
      </div>
      <div class="grid grid-cols-4 items-center gap-4">
        <Label for="username" class="text-right">Username</Label>
        <Input id="username" value="@peduarte" class="col-span-3" />
      </div>
    </div>
    <Sheet.Footer>
      <Sheet.Close asChild let:builder>
        <Button builders={[builder]} type="submit">Save changes</Button>
      </Sheet.Close>
    </Sheet.Footer>
  </Sheet.Content>
</Sheet.Root>
</div> -->


<!-- <div class="flex flex-col min-h-screen bg-muted/50">
  <div class="grow">
    body
  </div>
  
  <div class="flex-none">
    <Separator class="" />
    <div class="p-4 justify-center">
      <form>
        <div class="grid gap-0">
          <Textarea class="p-4" placeholder={`Reply name...`} />
          <div class="flex items-center">
            <Label for="mute" class="flex items-center gap-2 text-xs font-normal">
              <Switch id="mute" aria-label="Mute thread" /> Mute this thread
            </Label>
            <Button size="sm" class="ml-auto">Send</Button>
          </div>
        </div>
      </form>
    </div>
  </div>

  </div> -->

<!-- main box -->
<!-- <main class="flex flex-col bg-red-200"> -->
  <!-- find a way to open sidebar from header's hambuger icon -->
  <!-- head section -->
  <Header/>

  <!-- <div id="useless-top" class="flex-none bg-blue-400">
    body
  </div> -->
  
  <!-- MAIN SECTION -->
{#if isNewWorkflow}

<!-- TODO -->
<!-- scrolling on top, deve coprire il separatore. in teoria ogni textbox dovrebbe scrollare fino ad avere il separator on top e lasciando spazio vuoto "dinamico" sotto -->
<!--  -->

  <div id="context-container" class="flex grow justify-center">
    <div class="flex flex-col justify-center pb-28 sm:pb-40 mx-4 mt-8 max-w-xl bg-white">
      <!-- chat not started -->
      <!-- context box -->
        <!-- headings -->
        <div class="pb-8 flex flex-col items-center">
          <h2 class="scroll-m-20 text-3xl font-semibold tracking-wide transition-colors first:mt-0">
            Find and Digest
          </h2>
          <h2 class="scroll-m-20 mt-2 text-3xl font-bold tracking-wide text-orange-600 last:mt-0">
            Worldwide News
          </h2>
        </div>
          
        <!-- sample workflows -->
        <!-- NB: when clicked, span content should be sent via API to backend to start process -->
        <div class="flex flex-col items-center space-y-3 mt-2">
          <small class="text-base pb-1 font-medium leading-none">Try a sample workflow</small>

          <button on:click={sendUserPrompt} class="p-2 bg-orange-300/30 transition-colors duration-300 ease-in-out hover:bg-orange-300/60 rounded-md">
            <span id="sourceSpan" class="md:flex text-sm text-orange-700">
              What recent advancements in renewable energy are impacting global sustainability?
            </span>
          </button>
          
          <button on:click={sendUserPrompt} class="p-2 bg-orange-300/30 transition-colors duration-300 ease-in-out hover:bg-orange-300/60 rounded-md">
            <span class="md:flex text-sm text-orange-700">
              How is AI transforming healthcare for patients and research?
            </span>
          </button>

          <button on:click={sendUserPrompt} class="p-2 bg-orange-300/30 transition-colors duration-300 ease-in-out hover:bg-orange-300/60 rounded-md">
            <span class="md:flex text-sm text-orange-700">
              What are the most promising startups in the fintech industry?
            </span>
          </button>

          <button on:click={sendUserPrompt} class="p-2 bg-orange-300/30 transition-colors duration-300 ease-in-out hover:bg-orange-300/60 rounded-md">
            <span class="md:flex text-sm text-orange-700">
              Do cazzo è annata Giorgia Meloni yesterday?
            </span>
          </button>
          
          <!-- interaction buttons -->
          <div class="flex flex-row space-x-2 pt-4">
            <a href="/dashboard" class={buttonVariants({ variant: "outline", size: "xs"})} >
              <IconDiscord />
              <span class="ml-2 text-xs">Talk with us</span>
            </a>
            <a href="/dashboard" class={buttonVariants({ variant: "outline", size: "xs"})} >
              <IconLetter />
              <span class="ml-2 text-xs">Feedback</span>
            </a>
          </div>
        </div>
      </div>
    </div>

      {:else}
      <!-- chat started -->
      <!-- context box -->
      
      <!-- {#if isLoading && isNewWorkflow}
      <div id="context-container" class="flex grow justify-center content-center">
        <div class="flex flex-col justify-center pb-20 mx-4 max-w-xl bg-white">
          <div class="flex w-full max-w-full items-center space-x-4">
            <div class="space-y-5">
              <Skeleton class="h-4 w-[200px] sm:w-[400px]"/>
              {#each Array(7) as _, index}
              <Skeleton class="h-4 w-[250px] sm:w-[450px]"/>
              {/each}
            </div>
          </div>
        </div>
      </div>
      
      {:else} -->

      <!-- CHATBOX -->
      <!-- <div id="context-container" class="flex grow justify-center content-center">
        
        <div class="flex flex-col justify-center pb-20 mx-4 max-w-xl bg-white">

          <div class="flex flex-col w-full max-w-xl mt-8">

            <div class="flex bg-blue-400 w-full">
              ciao
            </div>

            <div class="flex flex-row border transition-colors duration-200 ease-in-out outline-none {isFocused ? 'border-slate-700' : 'border-slate-300'} rounded-lg">
              <div 
                id="user-prompt-container"
                class="overflow-hidden max-w-xl w-full py-3 px-3 outline-none" 
                data-gramm="false"
                contenteditable="plaintext-only"
                data-text="ciao"
                aria-owns="quill-mention-list"
                role="textbox"
                tabindex="0"
                on:focus={() => isFocused = true}
                on:blur={() => isFocused = false}
                on:keydown={sendUserPrompt}
                >
              </div>
            </div>
          </div>
        </div>
      </div> -->


      <div id="chat-box-main-container" class="flex flex-col items-center grow">
        
        {#each messages as message (message.response)}
        <div class="message-title-box px-3 w-full max-w-2xl">
          
          <div class="flex flex-col justify-center">

            <!-- using separator as anchor point for new messages auto scrolling -->
            <div id="chat-anchor-scroll" class="flex justify-center my-3">
              <Separator class="w-full max-w-sm bg-slate-200 my-2" />
            </div>

            <div class="flex flex-col m-3 space-y-2">
            <!-- tabs for switching synth / sources not needed atm 20/03/24 -->
            <!-- changing content i.e. text / sources contaners should be placed inside -->
              <Tabs.Root bind:value={message.selectedTab}>
                <Tabs.List class="h-max w-max p-2 bg-slate-200/75">
                  <Tabs.Trigger value="synth">Synthesis</Tabs.Trigger>
                  <Tabs.Trigger value="sources">Sources</Tabs.Trigger>
                </Tabs.List>
              </Tabs.Root>
              <!-- user message -->
              <!-- <p class="p-2 scroll-m-20 text-xl font-semibold tracking-tight">User input prompt</p> -->
              <div class="flex grow border rounded-lg border-slate-300">
              <!-- <div class="flex grow border transition-colors duration-200 ease-in-out outline-none {isFocused ? 'border-slate-700' : 'border-slate-300'} rounded-lg border border-slate-300 bg-white"> -->
                <!-- <div 
                  id="chat-prompt-container"
                  class="ml-2 overflow-hidden max-w-xl w-full py-3 px-3 outline-none" 
                  data-gramm="false"
                  contenteditable="plaintext-only"
                  aria-owns="quill-mention-list"
                  role="textbox"
                  tabindex="0"
                  on:focus={() => isFocused = true}
                  on:blur={() => isFocused = false}
                  on:keydown={event=> sendUserPrompt(event, false)}
                  > -->
                <p class="p-2 scroll-m-20 text-xl font-semibold tracking-tight">{message.response}</p>
                <!-- </div> -->
              </div>

              <div class="rounded-xl w-fit bg-slate-100 hover:bg-white border border-white hover:border-slate-200">
                <p class="px-2 py-1 text-slate-700 font-mono font-medium text-xs">gpt-3.5</p>
              </div>
            </div>
          </div>

        <div class="flex flex-col mt-5 m-3 space-y-2">
        {#if message.selectedTab === 'synth'}
            <div class="space-y-5 text-sm">
              <p class="">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente molestiae voluptatibus odio distinctio praesentium labore facere voluptatum iure necessitatibus consectetur iste aut accusantium similique unde, aliquid excepturi cumque itaque eligendi.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam assumenda dolores amet voluptatibus rem dicta non, eveniet ducimus fugiat. Explicabo excepturi iure vitae quidem, inventore qui porro praesentium architecto nisi?
              </p>
              <p> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, a ullam. Eligendi expedita ex sunt quisquam error porro quae sint dignissimos, enim commodi soluta similique iure excepturi temporibus dicta sed.
              </p>
              <p> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, a ullam. Eligendi expedita ex sunt quisquam error porro quae sint dignissimos, enim commodi soluta similique iure excepturi temporibus dicta sed.
              </p>
            </div>
        {/if}
        
        {#if message.selectedTab === 'sources'}
        <!-- TBD -->
          <Carousel.Root
            opts={{
              align: "start"
            }}
            class="w-full"
          >
            <Carousel.Content>
              {#each Array(5) as _, i (i)}
                <Carousel.Item class="basis-1/3">
                  <div class="p-1">
                    <Card.Root>
                      <Card.Content
                        class="flex aspect-square items-center justify-center p-6"
                      >
                        <span class="text-3xl font-semibold">Source {i + 1}</span>
                      </Card.Content>
                    </Card.Root>
                  </div>
                </Carousel.Item>
              {/each}
            </Carousel.Content>
            <Carousel.Previous />
            <Carousel.Next />
          </Carousel.Root>       
        {/if}
      </div>


        </div>

        
        {/each}
  </div> 

        <!-- {/if} -->
      
      {/if}
    

  <!-- display waiting message while processing -->
<Toaster position="top-center" />

  <!-- input box section -->
  <div id="user-input-box" class="sticky flex justify-center w-full bottom-0 z-10 pb-4 px-3 bg-white">
    
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

