// note: This is a polyfill to Object.assign to support old nodejs versions (0.10 / 0.12) where
// Object.assign doesn't exist.
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
export default function (target) {
	if (target == null) {
		// TypeError if undefined or null
		throw new TypeError("Cannot convert undefined or null to object");
	}

	const to = Object(target);

	for (let index = 1; index < arguments.length; index++) {
		const nextSource = arguments[index];

		if (nextSource != null) {
			// Skip over if undefined or null
			for (const nextKey in nextSource) {
				// Avoid bugs when hasOwnProperty is shadowed
				if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
					to[nextKey] = nextSource[nextKey];
				}
			}
		}
	}
	return to;
}
