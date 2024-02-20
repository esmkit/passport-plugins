const re = /(\S+)\s+(\S+)/;

export function parse(hdrValue) {
	if (typeof hdrValue !== "string") {
		return null;
	}
	const matches = hdrValue.match(re);
	return matches && { scheme: matches[1], value: matches[2] };
}

const auth_hdr = {
	parse: parse,
};

export default auth_hdr;
