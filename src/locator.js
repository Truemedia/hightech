module.exports = class Locator
{
  constructor(baseName, pathOptions = {})
  {
    this.baseName = baseName;
    this.pathOptions = {...this.defaultPathOptions, ...pathOptions}
  }

  get defaultPathOptions()
  {
    return {
      cwd: null,
      assetDir: null,
      targetDir: null,
      exts: [],
      extPrefix: null
    };
  }

  get path()
  {
    let {cwd, assetDir, targetDir, exts, extPrefix} = this.pathOptions;
    let [ext] = exts;
    let filename = [this.baseName, extPrefix, ext].filter(prop => (prop != undefined && prop != null)).join('.');
    return [cwd, assetDir, targetDir, filename].join('/');
  }
}
