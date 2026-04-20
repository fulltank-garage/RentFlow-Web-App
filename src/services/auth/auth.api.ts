import api from "@/src/lib/axios";
import { getErrorMessage } from "@/src/lib/api-error";
import type {
  AuthResponse,
  Customer,
  LoginPayload,
  RegisterPayload,
} from "./auth.types";

type LegacyAuthResponse = {
  success?: boolean;
  message?: string;
  user?: Customer;
  data?: Customer | { user?: Customer };
};

function normalizeAuthResponse(raw: AuthResponse | LegacyAuthResponse | null): AuthResponse {
  if (!raw) return {};

  const data = raw.data;

  if (data && "user" in data) {
    return {
      success: raw.success,
      message: raw.message,
      data: data.user ? { user: data.user } : undefined,
    };
  }

  if (data && "id" in data) {
    return {
      success: raw.success,
      message: raw.message,
      data: { user: data },
    };
  }

  if ("user" in raw && raw.user) {
    return {
      success: raw.success,
      message: raw.message,
      data: { user: raw.user },
    };
  }

  return {
    success: raw.success,
    message: raw.message,
  };
}

export async function loginWithPassword(
  payload: LoginPayload,
  fallbackMessage = "เข้าสู่ระบบไม่สำเร็จ"
): Promise<AuthResponse> {
  try {
    const res = await api.post<AuthResponse | LegacyAuthResponse>(
      "/auth/login",
      payload
    );

    return normalizeAuthResponse(res.data);
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error, fallbackMessage));
  }
}

export async function registerWithPassword(
  payload: RegisterPayload,
  fallbackMessage = "สมัครสมาชิกไม่สำเร็จ"
): Promise<AuthResponse> {
  try {
    const name = `${payload.firstName} ${payload.lastName}`.trim();
    const res = await api.post<AuthResponse | LegacyAuthResponse>(
      "/auth/register",
      {
        ...payload,
        name,
      }
    );

    return normalizeAuthResponse(res.data);
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error, fallbackMessage));
  }
}

export async function logout(
  fallbackMessage = "ออกจากระบบไม่สำเร็จ"
): Promise<{ success?: boolean; message?: string }> {
  try {
    const res = await api.post("/auth/logout");
    return res.data;
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error, fallbackMessage));
  }
}

export async function getMe(
  fallbackMessage = "ดึงข้อมูลผู้ใช้ไม่สำเร็จ"
): Promise<AuthResponse> {
  try {
    const res = await api.get<AuthResponse | LegacyAuthResponse>("/auth/me");
    return normalizeAuthResponse(res.data);
  } catch (error: unknown) {
    throw new Error(getErrorMessage(error, fallbackMessage));
  }
}

export async function getSessionUser(
  fallbackMessage = "ดึงข้อมูลผู้ใช้ไม่สำเร็จ"
): Promise<Customer | null> {
  const response = await getMe(fallbackMessage);
  return response.data?.user ?? null;
}
