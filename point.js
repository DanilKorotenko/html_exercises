class Point
{
    constructor(aPoint)
    {
        this.x = aPoint.x;
        this.y = aPoint.y;
        this.z = aPoint.z;
    }

    rotatexz(anAngle)
    {
        const C = Math.cos(anAngle);
        const S = Math.sin(anAngle);

        const x = this.x;
        const z = this.z;

        this.x = x * C - z * S;
        // y stays the same
        this.z = x * S + z * C;

        return this;
    }

    rotateyz(anAngle)
    {
        const C = Math.cos(anAngle);
        const S = Math.sin(anAngle);

        const y = this.y;
        const z = this.z;

        // x stays the same
        this.y = y * C - z * S;
        this.z = y * S + z * C;

        return this;
    }

    rotatexy(anAngle)
    {
        const C = Math.cos(anAngle);
        const S = Math.sin(anAngle);

        const x = this.x;
        const y = this.y;

        this.x = x * C - y * S;
        this.y = x * S + y * C;
        // z stays the same

        return this;
    }

    move(aDeltaPoint)
    {
        this.x = this.x + aDeltaPoint.x;
        this.y = this.y + aDeltaPoint.y;
        this.z = this.z + aDeltaPoint.z;

        return this;
    }

    scale(aScale3D)
    {
        this.x = this.x * aScale3D.x;
        this.y = this.y * aScale3D.y;
        this.z = this.z * aScale3D.z;

        return this;
    }

    project3dto2d()
    {
        this.x = this.x / this.z;
        this.y = this.y / this.z;

        return this;
    }

    converttocanvas(aWidth, aHeight)
    {
        this.x = ((this.x + 1) / 2) * aWidth;
        this.y = (1 - (this.y + 1) / 2) * aHeight;

        return this;
    }

}
