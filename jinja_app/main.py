from pathlib import Path

from flask import Flask, render_template
from jinja2 import ChainableUndefined, ChoiceLoader, FileSystemLoader

ROOT = Path(__file__).parent.parent

app = Flask(__name__, static_url_path="/")
app.jinja_options = {
    "undefined": ChainableUndefined,  # This is needed to prevent jinja from throwing an error when chained parameters are undefined
    "loader": ChoiceLoader(
        [FileSystemLoader(ROOT / "packages"), FileSystemLoader(ROOT / "app")]
    ),
}


@app.route("/nhsuk-frontend/")
def index():
    template_path = f"index.njk"
    return render_template(template_path, baseUrl="/nhsuk-frontend/", version="9.3.0")


@app.route("/nhsuk-frontend/pages/<page>.html")
def components(page):
    template_path = f"pages/{page}.njk"
    return render_template(template_path, baseUrl="/nhsuk-frontend/", version="9.3.0")


@app.route("/nhsuk-frontend/components/<component>/<variant>.html")
def component(component, variant):
    template_path = f"components/{component}/{variant}.njk"
    return render_template(template_path, baseUrl="/nhsuk-frontend/", version="9.3.0")
