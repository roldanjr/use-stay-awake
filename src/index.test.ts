import { renderHook, act } from "@testing-library/react-hooks";
import useStayAwake from "../dist";

jest.spyOn(HTMLMediaElement.prototype, "play").mockReturnThis();
jest.spyOn(HTMLMediaElement.prototype, "pause").mockReturnThis();

describe("Test useStayAwake() hook", () => {
  test("canSleep should default to true", () => {
    const { result } = renderHook(() => useStayAwake());

    expect(result.current.canSleep).toBe(true);
  });

  test("preventSleeping() should make canSleep to be false", () => {
    const { result } = renderHook(() => useStayAwake());

    act(() => {
      result.current.preventSleeping();
    });

    expect(result.current.canSleep).toBe(false);
  });

  test("allowSleeping() should make canSleep to be true", () => {
    const { result } = renderHook(() => useStayAwake());

    act(() => {
      result.current.allowSleeping();
    });

    expect(result.current.canSleep).toBe(true);
  });
});
