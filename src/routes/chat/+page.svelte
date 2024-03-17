<script lang="ts">
	import { browser } from '$app/environment';
	import Header from '$lib/components/Header.svelte';

	import { resolvedTheme } from '$lib/theme';
	import '@fontsource/inter';
	import '@fontsource/jetbrains-mono';
	import '../../app.postcss';
	// import type { LayoutServerData } from './$types';
	import { onDestroy } from 'svelte';

	export let data;
	// const { chats } = data;

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
  
  import IconArrowRight from '$lib/components/ui/icons/IconArrowRight.svelte';
  import IconDiscord from '$lib/components/ui/icons/IconDiscord.svelte';
	import IconLetter from '$lib/components/ui/icons/IconLetter.svelte';

  import { Textarea } from "$lib/components/ui/textarea/index.js";
	import { Switch } from '$lib/components/ui/switch';
	import { Separator } from '$lib/components/ui/separator';

  let isFocused = false;

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
  
  <!-- main section -->
  <div class="flex grow justify-center content-center bg-green-400">

    <!-- context box -->
    <div class="flex flex-col justify-center pb-20 mx-4 max-w-xl bg-white">
      
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
      <div class="flex flex-col items-center space-y-3 mt-2">
        <small class="text-base pb-1 font-medium leading-none">Try a sample workflow</small>

        <button class="p-2 bg-orange-300/30 transition-colors duration-300 ease-in-out hover:bg-orange-300/60 rounded-md">
          <span class="md:flex text-sm text-orange-700">
            What recent advancements in renewable energy are impacting global sustainability?
          </span>
        </button>
        
        <button class="p-2 bg-orange-300/30 transition-colors duration-300 ease-in-out hover:bg-orange-300/60 rounded-md">
          <span class="md:flex text-sm text-orange-700">
            How is AI transforming healthcare for patients and research?
          </span>
        </button>

        <button class="p-2 bg-orange-300/30 transition-colors duration-300 ease-in-out hover:bg-orange-300/60 rounded-md">
          <span class="md:flex text-sm text-orange-700">
            What are the most promising startups in the fintech industry?
          </span>
        </button>

        <button class="p-2 bg-orange-300/30 transition-colors duration-300 ease-in-out hover:bg-orange-300/60 rounded-md">
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
  
  <!-- foot section -->
  <div class="absolute w-full bottom-0 z-10 flex justify-center content-center pb-4 px-3 bg-white">
    <!-- <div class="w-full max-w-xl px-3 ">
      <input class="placeholder:italic placeholder:text-slate-500 w-full border border-slate-300 transition-colors duration-200 ease-in-out focus:border-slate-700 focus:outline-none rounded-md py-2 pl-7 pr-3 shadow-sm sm:text-base" placeholder="Ask question / @ for context" type="text" name="search"/>
    </div> -->
    
    <!-- border only triggered on parent box to allow fully customizable text box (i.e. add icon) -->


    <div class="flex flex-row w-full max-w-xl border transition-colors duration-200 ease-in-out outline-none {isFocused ? 'border-slate-700' : 'border-slate-300'} rounded-lg">
      <div 
        class="ml-2 overflow-hidden max-w-xl w-full py-3 px-3 outline-none" 
        data-gramm="false" contenteditable="plaintext-only" aria-owns="quill-mention-list" data-text="Ask question | @ for context"
        on:focus={() => isFocused = true}
        on:blur={() => isFocused = false}
        >
    </div>
    <div class="mr-3 flex items-center">
        <IconArrowRight />
      </div>
    </div>
    <!-- <div class="w-full max-w-xl px-3">

      <div class="block w-full border border-slate-300 transition-colors duration-200 ease-in-out focus:border-slate-700 focus:outline-none rounded-md py-3 pl-7 pr-3 shadow-sm" data-gramm="false" contentEditable="true" aria-owns="quill-mention-list" data-text="Ask question | @ for context">
      </div>

    </div> -->
  </div>


<!-- </main> -->



<!-- </main> -->

