import * as Popover from "@radix-ui/react-popover";

// We can edit the text within our popover:
export default function RadixPopover() {
  return (
    <Popover.Root>
      <Popover.Trigger className="PopoverTrigger">Show info</Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className="PopoverContent">
          Hello! I am a popover which has got some really interesting te........
          <Popover.Arrow className="PopoverArrow" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
