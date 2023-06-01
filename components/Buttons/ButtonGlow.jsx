import Button from "./Button";

export default function ButtonGlow({ text_primary, text_secondary, disabled, classes, linkURL }) {
  return (
      <div className="flex flex-row justify-center">
          <div className="relative group">
              <div
                    className="absolute
                    inset-0
                    bg-gradient-to-r
                    from-pink-600
                    to-purple-900
                    rounded-lg
                    blur
                    group-hover:scale-y-125
                    group-hover:scale-x-105
                    group-hover:transition
                    duration-1000"/>
              <Button
                  text1={text_primary}
                  text2={text_secondary}
                  link={linkURL}
                  classes={classes}
                  disabled={disabled}
              />
          </div>
      </div>
  );
}
