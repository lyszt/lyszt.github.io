(()=>{ (function(){
	let d = {};
	fetch("/assets/data/projects.json")
		.then(t => t.json())
		.then(t => { d = t; L(d); })
		.catch(t => console.error("Failed to load projects:", t));

	const b = document.querySelector(".port-title");
	const i = document.querySelector("#port-photography");
	const l = document.querySelector("#port-video");
	const a = document.querySelector("#port-web");
	const u = document.querySelector("#port-code");
	const f = document.querySelector("#photography-folder");
	const h = document.querySelector("#video-folder");
	const y = document.querySelector("#web-folder");
	const r = document.querySelector("#code-folder");

	function L(t) {
		const q = Object.values(t).flat();
		const S = new Map(q.map(e => [e.title.trim().toLowerCase(), e]));
		const j = document.querySelectorAll(".port-folder .project");
		const E = document.querySelector("#project-title");
		const g = document.querySelector("#project-desc");
		const k = document.querySelector("#project-link");

		function p(e) {
			const o = e.title.trim().toLowerCase();
			const s = S.get(o);
			if (!s) { console.warn(`Project "${o}" not found.`); return; }
			if (E) E.textContent = e.title;
			if (g) g.textContent = s.description;
			if (k) k.setAttribute("href", s.link);
		}

		j.forEach(e => {
			e.addEventListener("mouseenter", () => p(e), { passive: true });
			e.addEventListener("click", () => p(e));
		});

		const n = document.querySelector("#transition");
		if (n != null && n.classList.contains("active")) n.classList.remove("active");
		if (r) { r.classList.remove("hidden"); r.classList.add("focus"); }

		const m = { photo: f, video: h, design: y, code: r };
		const v = { photography: i, video: l, design: a, code: u };

		function c(e) {
			Object.values(m).forEach(o => o && o.classList.add("hidden"));
			Object.values(v).forEach(o => o && o.classList.remove("focus"));
			if (m[e]) m[e].classList.remove("hidden");
			if (v[e]) v[e].classList.add("focus");
		}

		if (i) i.addEventListener("click", () => c("photo"));
		if (l) l.addEventListener("click", () => c("video"));
		if (a) a.addEventListener("click", () => c("design"));
		if (u) u.addEventListener("click", () => c("code"));
	}
})();})();
