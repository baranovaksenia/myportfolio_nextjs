// is active link check
export const isActiveLink = (menuPath, routePath) => {
	//The function first checks if both menuPath and routePath are truthy
	if (menuPath && routePath) {
		return menuPath.replace(/\/\d+/, "") === routePath.replace(/\/\d+/, "");
	}
};
