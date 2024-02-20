export const lookup = function (obj, field) {
	if (!obj) {
		return null;
	}
	const chain = field.split("]").join("").split("[");
	for (var i = 0, len = chain.length; i < len; i++) {
		var prop = obj[chain[i]];
		if (typeof prop === "undefined") {
			return null;
		}
		if (typeof prop !== "object") {
			return prop;
		}
		obj = prop;
	}
	return null;
};
