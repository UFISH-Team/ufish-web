import { defineStore } from "pinia";
import { computed } from "vue";

export async function waitState(stateFn: () => any, value: any) {
  const stateValue = computed(stateFn); // replace with your state

  while (stateValue.value !== value) {
    await new Promise((resolve) => setTimeout(resolve, 100)); // polling interval
  }

  console.log("State changed to the specific value");
}

export async function waitRunable() {
  const store = useRunStore();
  await waitState(() => store.runable, true);
}

export async function waitOutputGetable() {
  const store = useRunStore();
  await waitState(() => store.outputGetable, true);
}

type ApiInput = {
  data: object,
  name: string,
}

type ApiOutput = {
  enhanced: object,
  spots: object,
}

export const useRunStore = defineStore("run", {
  state: () => ({
    runQueryCount: 0,
    runable: false,
    inputImage: null as ApiInput | null,
    output: null as ApiOutput | null,
    outputGetable: false,
  }),
  actions: {
    async run() {
      await waitRunable();
      this.runQueryCount += 1;
      await waitRunable();
      this.outputGetable = false;
    },
    setRunable(runable: boolean) {
      this.runable = runable;
    },
    setInputImage(data: object, name: string) {
      this.inputImage = { data, name }
    },
    clearInputImage() {
      this.inputImage = null;
    },
    setOutput(output: ApiOutput) {
      this.output = output;
      this.outputGetable = true;
    },
    async getOutput() {
      await waitOutputGetable();
      return this.output;
    },
  }
}) 