from sphinx.highlighting import lexers
from pygments.lexers.web import PhpLexer

needs_sphinx = '1.0'
extensions = []
exclude_patterns = ['_build']
pygments_style = 'sphinx'
master_doc = 'index'

html_theme_path = ['../build/theme']
html_theme = 'ringcaptcha'

lexers['php'] = PhpLexer(startinline=True)
lexers['php-annotations'] = PhpLexer(startinline=True)
