Hooks.once('init', () => { 
	if(typeof Babele !== 'undefined') { 
		Babele.get().register({
			module: 'monks-enhanced-journal-pt-br',
			lang: 'pt-BR',
			dir: 'lang'
		}); 
	}
});