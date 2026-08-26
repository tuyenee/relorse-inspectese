def test_readme_contains_fix():
    with open("README.md") as f:
        assert "fixed the issue" in f.read()
