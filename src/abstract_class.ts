//we can't create object from abstract class

abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): string;
  getReelTime(): number {
    return 10;
  }
}

class Instagram2 extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): string {
    return "sepia";
  }
}
