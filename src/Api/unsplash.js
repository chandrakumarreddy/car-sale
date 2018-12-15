import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	timeout: 2000,
	headers: {
		Authorization:
			"Client-ID f02cf43439643698a41ea27d6ab6f8c6f23e5c5bda0b044a102352a5a08cc554"
	}
});
