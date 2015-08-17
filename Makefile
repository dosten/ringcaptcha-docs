theme:
	@mkdir -p build/theme/ringcaptcha
	@cp design/theme-support/* build/theme/ringcaptcha
	@cp -R design/templates/* build/theme/ringcaptcha
	./node_modules/.bin/gulp build

docs: theme
	@sphinx-build docs build/html

clean:
	@rm -vrf build

.PHONY: theme docs build clean
