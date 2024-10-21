import urls from "../utils/constant/UrlConstant";
import strings from "../utils/constant/stringConstant";
import { getNoAuthCallParams, makeCall } from "./service";

export async function getEmployeeList(body = {}, isToast = false) {
  try {
    const callParams = getNoAuthCallParams(strings.GET, body, isToast);
    const response = await makeCall(urls.empList, callParams);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getIndividualEmp(body = {}, isToast = false) {
  try {
    const callParams = getNoAuthCallParams(strings.GET, body, isToast);
    const response = await makeCall(`${urls.singleEmp}/${body.id}`, callParams);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function deleteEmp(body = {}, isToast = false) {
  try {
    const callParams = getNoAuthCallParams(strings.DELETE, body, isToast);
    const response = await makeCall(
      `${urls.empDelete}/${body.id}`,
      callParams,
      isToast
    );
    return response;
  } catch (error) {
    throw error;
  }
}

export async function editEmp(id = "", body = {}, isToast = false) {
  try {
    const callParams = getNoAuthCallParams(strings.PUT, body, isToast);
    const response = await makeCall(
      `${urls.empEdit}/${id}`,
      callParams,
      isToast
    );
    return response;
  } catch (error) {
    throw error;
  }
}
