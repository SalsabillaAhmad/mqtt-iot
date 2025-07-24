import { useDeviceView } from "./useDeviceView";
import { publisherOptions } from "./publisherOptions";
import { subscriberOptions } from "./subscriberOptions";
import { useSelectedSubscriber } from "./useSelectedSubscriber";
import { useSelectedPublisher } from "./useSelectedPublisher";

export function useDeviceManager() {
  const deviceView = useDeviceView();
  const deviceSelectedSubscriber = useSelectedSubscriber();
  const deviceSelectedPublisher = useSelectedPublisher();

  return {
    ...deviceView,
    ...deviceSelectedSubscriber,
    ...deviceSelectedPublisher,
    publisherOptions,
    subscriberOptions,
  };
}
