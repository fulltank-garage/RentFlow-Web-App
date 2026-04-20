import axios from "axios";

type ErrorPayload = {
  message?: string;
};

export function getErrorMessage(error: unknown, fallbackMessage: string) {
  if (axios.isAxiosError(error)) {
    const responseMessage =
      typeof error.response?.data === "object" && error.response?.data
        ? (error.response.data as ErrorPayload).message
        : undefined;

    return responseMessage || error.message || fallbackMessage;
  }

  if (error instanceof Error) {
    return error.message || fallbackMessage;
  }

  return fallbackMessage;
}

export function getErrorStatus(error: unknown) {
  if (!axios.isAxiosError(error)) {
    return undefined;
  }

  return error.response?.status;
}
