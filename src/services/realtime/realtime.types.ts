export type RentFlowRealtimeEventType =
  | "connection.ready"
  | "booking.created"
  | "booking.updated"
  | "booking.cancelled"
  | "payment.created"
  | "payment.updated"
  | "notification.new"
  | "car.changed"
  | "branch.changed"
  | "availability.changed"
  | "support.changed"
  | "tenant.updated";

export type RentFlowRealtimeEvent = {
  type: RentFlowRealtimeEventType | string;
  tenantId?: string;
  userId?: string;
  userEmail?: string;
  entityId?: string;
  data?: Record<string, unknown>;
  createdAt?: string;
};

