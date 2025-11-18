export function makeToastSuccess(title, message) { return { type: "success", title, message }; }
export function makeToastError(title, message) { return { type: "error", title, message }; }
